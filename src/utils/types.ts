export interface IWizard { 
    step1: stepOne,
    step2: stepTwo,
    step3: stepThree
}

type TStep<T> = {
    schema: string[],
    data: T[]
} 

export type stepOne = TStep<{id: string, name: string, star: string, available: boolean}>
export type stepTwo = TStep<{id: string,  data:{name:string}[]}>
export type stepThree = TStep<any[]>