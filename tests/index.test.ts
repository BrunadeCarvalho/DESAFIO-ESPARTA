import { app } from "../src/app";
import request from "supertest";

describe("Status code tests", ()=>{
    test('GET /project, status code should be equal 200"', async ()=>{
        const res = await request(app).get('/project')
        expect(res.statusCode).toEqual(200)
    }),

    test("POST invalid name, status code should be equal 400", async ()=>{
        const result = await request(app).post("/project")
        .send({
            "nam": "Projeto 30",
            "description": "testando projeto 30"
        })
        expect(result.statusCode).toEqual(400)
    })

    test("GET invalid id, status code should be equal 404", async ()=>{
        const result = await request(app).get("/project/9743290")
        expect(result.statusCode).toEqual(404)
    })
})