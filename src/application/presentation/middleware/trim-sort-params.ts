import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class TrimSortedParamsMiddleware implements NestMiddleware {
  use(req: Request, _res: Response, next: NextFunction) {
    if ( req.query.sort ) {
      let sorts = (Array.isArray(req.query.sort) ? req.query.sort : [ req.query.sort ]) as string[];
      req.query.sort = sorts.map(this.trimSortedParams);
    }
    next();
  }
  private trimSortedParams(sort: string) {
    const [field, ascOrDesc] = sort.split(',');
    if ( field && ascOrDesc ) {
      return `${field.trim()},${ascOrDesc.trim()}`;
    }
    return field;
  }
}