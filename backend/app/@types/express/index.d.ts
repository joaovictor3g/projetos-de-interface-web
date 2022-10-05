import express from "express";

declare module "express" {
  interface Request {
    userId: string;
  }
}
