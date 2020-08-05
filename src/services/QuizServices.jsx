import GenericService from "./GenericServices";
class QuizServices extends GenericService {
  constructor() {
    super();
  }
  addProduct = (data) => this.post("questions", data);
  deleteProduct = (_id) => this.delete("products/" + _id);
  updateProduct = (_id, data) => this.put("products/" + _id, data);
  getProducts = () => this.get("products");
  getSingleProduct = (id) => this.get("products/" + id);
}

let quizServices = new QuizServices();
export default quizServices;