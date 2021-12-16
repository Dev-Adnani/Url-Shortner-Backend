import { Request, Response } from "express";
import analytics from "../models/analytics.model";
import shortUrl from "../models/shortUrl.model";
import { customAlphabet } from "nanoid";

export class UrlController {
  static async checkStatus(req: Request, res: Response) {
    try {
      return res.send("Great Sucess 📦");
    } catch (e) {
      console.error(e);
    }
  }
  static async createCustomShortUrl(req: Request, res: Response) {
    let { destination, customText } = req.body;
    try {
      const short = await shortUrl.findOne({ customText }).lean();
      if (short) {
        return res.send({
          url: null,
          destination: destination,
          message: "This Custom Url Is Already Taken",
          received: false,
        });
      } else {
        const newUrl = await shortUrl.create({
          shortId: customText,
          destination,
        });
        return res.send({
          url: newUrl["shortId"],
          destination: newUrl["destination"],
          message: "Success 🔥 , Please Copy The Link",
          received: true,
        });
      }
    } catch (e) {
      return res.send({
        url: '',
        destination: destination,
        message: "This Custom Url Is Already Taken",
        received: false,
      });
    }
  }

  static async createRandomShortUrl(req: Request, res: Response) {
    try {
      let { destination } = req.body;
      const nanoid = customAlphabet("abcdefghijklmnopqrstuvxyz0987654321", 6);

        const newUrl = await shortUrl.create({
          shortId: nanoid(),
          destination,
        });
        return res.send({
          url: newUrl["shortId"],
          destination: newUrl["destination"],
          message: "Success 🔥 , Please Copy The Link",
          received: true,
        });
     
    } catch (e) {
      console.error(e);
    }
  }

  static async handleRedirect(req: Request, res: Response) {
    try {
      const { shortId } = req.params;
      const short = await shortUrl.findOne({ shortId }).lean();

      if (!short) {
        return res.sendStatus(404);
      }
      analytics.create({ shortUrl: short._id });
      return res.redirect(short.destination);
    } catch (e) {
      console.error(e);
    }
  }

  static async getAnalytics(req: Request, res: Response) {
    try {
      const data = await analytics.find({}).lean();
      return res.send(data);
    } catch (e) {
      console.error(e);
    }
  }

  static async getShortUrl(req: Request, res: Response) {
    const { shortId } = req.params;
    const short = await shortUrl.findOne({ shortId }).lean();
    try {
      if (!short) {
        return res.sendStatus(404);
      }
      return res.json(short);
    } catch (e) {
      console.error(e);
    }
  }
}
