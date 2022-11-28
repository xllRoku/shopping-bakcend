import express from "express";
import { config as dotenvConfig } from "dotenv";
import UserRoutes from "./infrastructure/routes/user-routes.js";
import { errorMiddleware } from "./infrastructure/middlewares/error-middleware.js";
import mongoose from "mongoose";
import { UserSchema } from "./infrastructure/schema/user.schema.js";

dotenvConfig();

const startApp = () => {
  const app = express();
  app.use(express.json());
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

    const user = new UserSchema();

    app.use("/users", UserRoutes);
    app.use(errorMiddleware);

    app.listen(process.env.PORT, () =>
      console.log(`Server listen on port ${process.env.PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

bootstrap();
