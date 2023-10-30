import { defineStore } from 'pinia';

interface IApplicationDS{
    selectedRestaurant: string,
    selectedFood: string
}

export const ApplicationDS = defineStore('appState', {
    state: (): IApplicationDS => {
        return {
            selectedRestaurant: '',
            selectedFood:''
        }
    },
    actions:{
        setSelectedRestaurant(selectedRestaurant: string){
            this.selectedRestaurant = selectedRestaurant
        },
        setSelectedFood(selectedFood: string){
            this.selectedFood = selectedFood
        }
    },
    getters:{
        getSelectedRestaurant(state){
            return state.selectedRestaurant
        },
        getSelectedFood(state){
            return state.selectedFood
        }
    }
});