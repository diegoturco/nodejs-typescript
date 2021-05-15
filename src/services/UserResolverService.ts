import { UserModel } from "../entities/User";
import { Service } from "typedi";
import { UserInput } from "src/types/UserInput";

@Service()
export class UserService {

  async findOne(id: string) {  
    return await UserModel.findOne({ _id: id });
  }
    
  async find() {  
    return await UserModel.find();
  }

  async create(data: UserInput) {
    return (await UserModel.create(data)).save();
  }

  async updateOne(id: string, data: UserInput) {
    return await UserModel.findOneAndUpdate({ _id: id }, data, { new: true });
  }

  async deleteOne(id: string) {
    return await UserModel.findOneAndDelete({ _id: id });
  }
}