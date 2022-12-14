import express from "express";
import { config as dotenvConfig } from "dotenv";
import UserRoutes from "./infrastructure/routes/user.routes.js";
import ItemsRoutes from "./infrastructure/routes/item.routes.js";
import CategoriesRoutes from "./infrastructure/routes/item.routes.js";
import { errorMiddleware } from "./infrastructure/middlewares/error-middleware.js";
import mongoose from "mongoose";
import cors from "cors";

dotenvConfig();

const startApp = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  return app;
};

const connectDB = () => {
  mongoose.connect(process.env.MONGODB_URI);
};

const bootstrap = async () => {
  try {
    const app = startApp();

    await connectDB();

    console.log("DB conectada");

    app.use("/users", UserRoutes);
    app.use("/items", ItemsRoutes);
    app.use("categories", CategoriesRoutes);
    app.use(errorMiddleware);

    app.listen(process.env.PORT, () =>
      console.log(`Server listen on port ${process.env.PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

bootstrap();
