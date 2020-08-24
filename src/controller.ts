import { Controller, Get, Res, Post, Body } from "@nestjs/common";
import { Response } from "express";
import { Child } from "./model2";

@Controller()
export class CatsController {
  @Get()
  findAll(@Res() res: Response): Response<number> {
    return res.status(200).send(2);
  }

  @Post("hello")
  save(@Body() hello: Child, @Res() res: Response): void {
    return res.status(200).end();
  }
}
