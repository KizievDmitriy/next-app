import { SortEnum } from "../../components/Sort/SortProps"
import { ProductModel } from "../../interfaces/product.interface";

export type SortActions = { type: SortEnum.Price } | { type: SortEnum.Raiting };

export interface SortReducerState {
    sort: SortEnum;
    product: ProductModel[];
}

export const sortReducer = (state: SortReducerState, action: SortActions): SortReducerState => {
    switch (action.type) {
        case SortEnum.Raiting:
            return {
                sort: SortEnum.Raiting,
                product: state.product.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1)
            };
        case SortEnum.Price:
            return {
                sort: SortEnum.Price,
                product: state.product.sort((a, b) => a.price > b.price ? 1 : -1)   //от меньшего к большему
            };
        default:
            throw new Error('Что-то пошло не так...');
    }
};