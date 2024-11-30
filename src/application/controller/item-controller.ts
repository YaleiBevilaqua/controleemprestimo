import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { CreateItemUseCase } from "../use-cases/create-item/create-item-usecase";
import { GetItemUseCase } from "../use-cases/get-item/get-item-usecase";
import { GetAllItemUseCase } from "../use-cases/get-all-items/get-items-usecase";
import { UpdateItemUseCaseInput } from "../use-cases/update-item/update-item-input";
import { UpdateItemUseCase } from "../use-cases/update-item/update-item-usecase";


export class ItemController{
    constructor(private repositoryFactory: RepositoryFactory
    ) {}
    
   async getAll(input: any) { 
        const getItems = new GetAllItemUseCase(this.repositoryFactory);
        return await getItems.execute(input);
    }

    async getById(id: string) {
         try {
             const getItem = new GetItemUseCase(this.repositoryFactory);
             return await getItem.execute({id});
         } catch (e: any) {
             return {
                 message: e.message
             }
         }
     }

    async create(input: any){
        try {
            const createItemUseCase = new CreateItemUseCase(
                this.repositoryFactory
            );
            return await createItemUseCase.execute(input);
        } catch (e: any) {
            return {
                message: e.message
            }
        }
    }

    //  update(input: UpdateItemUseCase {
    //      const updateItemUseCase = new UpdateItemUseCase(
    //          this.itemRepository,
    //          this.itemTypeRepository
    //       );
    //       return updateItemUseCase.execute(input);
    //   }

    //  delete(id: string) {
    //      try {
    //          const deleteItem = new DeleteItemUseCase(this.itemRepository);
    //          return deleteItem.execute({id});
    //      } catch (e: any) {
    //          return {
    //              message: e.message
    //          }
    //      }
        
    //  }
}