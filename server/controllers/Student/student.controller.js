const puppeteer = require('puppeteer');
const fs = require('fs');
const _ = require('lodash');

const populateTemplateVariables = (template, variables = {}) => {
    const compiled = _.template(template);
    return compiled(variables);
};

exports.generateStudentRecord = async (req, res) => {
    const pdfOptions = {
        path: '../public/studentRecord.pdf',
        format: 'A4',
        printBackground: true,
        width: 595,
        height: 842
    };
    const template = {};
    template.studentRecord = fs.readFileSync('templates/StudentRecord.html', 'utf-8').toString();
    template.stylesheet = fs.readFileSync('templates/stylesheet.css', 'utf-8').toString();

    template.brandImage = fs.readFileSync('../public/Brand Logo.png').toString('base64');
    
    const stylesheet = `<style type="text/css"> ${template.stylesheet} </style>`;
    template.studentRecord = template.studentRecord.replace('<style type="text/css"></style>', stylesheet);
    const brandImage = '<img class="brandImage" src="../../public/Brand Logo.png"/>';
    const brandImageBorder = '<img class="brand-image" src="../../public/Brand Logo.png"/>';
    template.studentRecord = template.studentRecord.replace(brandImage,`<img class="brandImage" alt="logo" src="data:image/png;base64,${template.brandImage}"`);
    template.studentRecord = template.studentRecord.replace(brandImageBorder,`<img class="brandImage" alt="logo" src="data:image/png;base64,${template.brandImage}"`);
    template.studentRecord = template.studentRecord.replace('<table background="../../public/Brand Logo.png">"',`<table background="data:image/png;base64,${template.brandImage}"`);
    const pdfTemplate = populateTemplateVariables(template.studentRecord);

    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(pdfTemplate);
        
        await page.pdf(pdfOptions);
        await page.close();
        await browser.close();
        
        console.log('student record generated!');
        return Promise.resolve({
            fileName: 'studentRecord.pdf',
        });
    } catch(err) {
        const errMsg = 'Unexpected error while generating pdf';
        return Promise.reject(new StandardError(500, errMsg))
    }
};
