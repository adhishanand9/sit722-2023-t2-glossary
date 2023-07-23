var express = require('express');
var router = express.Router();

const itemList = [
  { 'id': 1, 'term': 'DevOps', 'description': 'DevOps, which stands for development and operations, is a set of practices and technologies that aim to improve an organizations capacity to produce applications and services more quickly than traditional software development procedures. ','reference':'“What Is DevOps and How Does It Work? | Synopsys,” www.synopsys.com. https://www.synopsys.com/glossary/what-is-devops.html'},
  { 'id': 2, 'term':'Continuous Integration','description':'Continuous integration developers commit their code changes to a centralized repository on a regular basis, following which automated builds and tests are done.','reference':'“What is Continuous Integration? – Amazon Web Services,” Amazon Web Services, Inc. https://aws.amazon.com/devops/continuous-integration/'},
  { 'id': 3, 'term':'Continuous Deployment','description':'Continuous deployment is a completely developed and comprehensive code change process cycle that goes through every phase of the software life cycle before being delivered to production settings. Automated incremental changes are done as a part of this.','reference':'S. Vadapalli, DevOps: Continuous Delivery, Integration, and Deployment with DevOps: Dive into the core DevOps strategies. Packt Publishing Ltd, 2018.'},
  { 'id': 4, 'term':'Microservice','description':'A microservice is a small, self-contained software operation that can be deployed and maintained independently.','reference':'A. K. Davis, Bootstrapping Microservices with Docker, Kubernetes, and Terraform: A project-based guide. 2021. [Online]. Available: https://discovery.ebsco.com/linkprocessor/plink?id=db0e7980-bdfb-3d3b-b4e9-127c44a7aebb'},
  { 'id': 5, 'term':'Shorter Lead Time','description':'It is the time required to get from committing code to successfully executing code in production.','reference':'D. DeBellis and C. Peters, “DORA 2022 Accelerate State of DevOps Report now out,” Google Cloud Blog, Sep. 28, 2022. https://cloud.google.com/blog/products/devops-sre/dora-2022-accelerate-state-of-devops-report-now-out'},
  { 'id': 6, 'term':'Bootstrap','description':'Bootstrap is the most widely used HTML, CSS, and JS framework for creating a responsive and mobile-friendly website. It can also utilise JavaScript plug-ins.','reference':'“What is Bootstrap.” https://www.w3schools.com/whatis/whatis_bootstrap.asp'},
  { 'id': 7, 'term':'Docker','description':'Docker is a tool that is used to package and publish microservices.','reference':'A. K. Davis, Bootstrapping Microservices with Docker, Kubernetes, and Terraform: A project-based guide. 2021. [Online]. Available: https://discovery.ebsco.com/linkprocessor/plink?id=db0e7980-bdfb-3d3b-b4e9-127c44a7aebb'},
  { 'id': 8, 'term':'Kubernetes','description':'Kubernetes is a container-based application management platform. It can manage and automate container deployment and scaling. ','reference':'A. K. Davis, Bootstrapping Microservices with Docker, Kubernetes, and Terraform: A project-based guide. 2021. [Online]. Available: https://discovery.ebsco.com/linkprocessor/plink?id=db0e7980-bdfb-3d3b-b4e9-127c44a7aebb'},
  { 'id': 9, 'term':'Deployment Frequency','description':'The frequency with which software is deployed in a company. ','reference':'D. DeBellis and C. Peters, “DORA 2022 Accelerate State of DevOps Report now out,” Google Cloud Blog, Sep. 28, 2022. https://cloud.google.com/blog/products/devops-sre/dora-2022-accelerate-state-of-devops-report-now-out'},
  { 'id': 10, 'term':'Recovery Time','description':'The time it takes to repair a service or program that has malfunctioned or gone down. ','reference':'D. DeBellis and C. Peters, “DORA 2022 Accelerate State of DevOps Report now out,” Google Cloud Blog, Sep. 28, 2022. https://cloud.google.com/blog/products/devops-sre/dora-2022-accelerate-state-of-devops-report-now-out'}


]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'SIT722', items: itemList });
});

module.exports = router;
