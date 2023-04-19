const chai = require('chai');
const expect = chai.expect;
const app = require('../index');
const request = require('supertest');
const mongoose = require('mongoose');

//const chaiHttp = require('chai-http');
//chai.use(chaiHttp);

describe('Coffeeshop API', () => {
    let coffeeshopId;

    // Test GET Coffeeshop List
    describe('GET /api/coffeeshop', () => {
        it('should retrieve coffeeshop list', (done) => {
            request(app)
                .get('/api/coffeeshop')
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body.status).to.equal('success');
                    expect(res.body.message).to.equal('Coffeeshop list retrieved successfully');
                    done();
                });
        });
    });

    // Test POST new Coffeeshop Record
    describe('POST /api/coffeeshop', () => {
        it('should create a new coffeeshop record', (done) => {
            const coffeeshop = {
                shopName: 'East Coast Commune',
                shopAddress: '1000 ECP, #01-03, Singapore 449876',
                shopTel: '+65 8950 4142',
                shopInstagram: '@eccommune'
            };
            request(app)
                .post('/api/coffeeshop')
                .send(coffeeshop)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body.message).to.equal('New coffeeshop record created!');
                    expect(res.body.data.shopName).to.equal('East Coast Commune');
                    expect(res.body.data.shopAddress).to.equal('1000 ECP, #01-03, Singapore 449876');
                    expect(res.body.data.shopTel).to.equal('+65 8950 4142');
                    expect(res.body.data.shopInstagram).to.equal('@eccommune');
                    coffeeshopId = res.body.data._id;
                    done();
                });
        });
    });

    // Test GET individual Coffeeshop Record
    describe('GET /api/coffeeshop', () => {
        it('should retrieve coffeeshop record', (done) => {
            request(app)
                .get('/api/coffeeshop/' + coffeeshopId)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body.message).to.equal('Coffeeshop details loading..');
                    expect(res.body.data.shopName).to.equal('East Coast Commune');
                    expect(res.body.data.shopAddress).to.equal('1000 ECP, #01-03, Singapore 449876');
                    expect(res.body.data.shopTel).to.equal('+65 8950 4142');
                    expect(res.body.data.shopInstagram).to.equal('@eccommune');
                    done();
                });
        });
    });

    // Test PATCH individual Coffeeshop Record
    describe('PATCH /api/coffeeshop', () => {
        it('should update coffeeshop record', (done) => {
            const coffeeshop = {
                shopName: 'West Coast Commune',
                shopAddress: '1000 West Coast, #01-03, Singapore 449876',
                shopTel: '+65 8950 4142',
                shopInstagram: '@eccommune'
            };
            request(app)
                .patch('/api/coffeeshop/' + coffeeshopId)
                .send(coffeeshop)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body.message).to.equal('Coffeeshop record updated');
                    expect(res.body.data.shopName).to.equal('West Coast Commune');
                    expect(res.body.data.shopAddress).to.equal('1000 West Coast, #01-03, Singapore 449876');
                    expect(res.body.data.shopTel).to.equal('+65 8950 4142');
                    expect(res.body.data.shopInstagram).to.equal('@eccommune');
                    done();
                });
        });
    });

    // Test DELETE individual Coffeeshop Record
    describe('DELETE /api/coffeeshop', () => {
        it('should delete coffeeshop record', (done) => {
            request(app)
                .delete('/api/coffeeshop/' + coffeeshopId)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body.status).to.equal('success');
                    expect(res.body.message).to.equal('Coffeeshop record deleted');
                    done();
                });
        });
    });
});