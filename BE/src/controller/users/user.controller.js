import { catchError } from "../../middleware/error-handling.middleware.js";
import { ApiFeature } from "../../service/api-feature.service.js";
import { AppError } from "../../utils/app-error.js";
import { User } from "../../models/user.model.js";

const getUsers = catchError(async (req, res, next) => {
  const { page, size, ...query } = req.query;

  const apiFeature = new ApiFeature(req.query, User).pagination(+size || 20);

  const users = await apiFeature.sequelizeQuery;

  res.status(201).json({
    success: true,
    message: "Users found successfully",
    data: {
      totalUsers: users.count,
      users: users.rows,
    },
  });
});

const getUser = catchError(async (req, res, next) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return next(new AppError("!not found user", 404));

  res.status(200).json({
    success: true,
    message: "User found successfully",
    user,
  });
});

export { getUsers, getUser };
