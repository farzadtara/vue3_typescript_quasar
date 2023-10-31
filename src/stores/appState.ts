import { defineStore } from 'pinia';

interface IApplicationDS{
    selectedRestaurant: string,
    selectedFood: string
    orderDetail: string | number | null
}

export const ApplicationDS = defineStore('applicationds', {
    state: (): IApplicationDS => {
        return {
            selectedRestaurant: '',
            selectedFood:'',
            orderDetail:''
        }
    },
    actions:{
        setSelectedRestaurant(selectedRestaurant: string){
            this.selectedRestaurant = selectedRestaurant
        },
        setSelectedFood(selectedFood: string){
            this.selectedFood = selectedFood
        },
        setSelectedOrderDetail(orderDetail: string | number | null){
            this.orderDetail = orderDetail
        }
    },
    getters:{
        getSelectedRestaurant(state){
            return state.selectedRestaurant
        },
        getSelectedFood(state){
            return state.selectedFood
        },
        getOrderDetail(state){
            return state.orderDetail
        }
    }
});