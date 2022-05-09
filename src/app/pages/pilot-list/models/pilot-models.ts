export interface IPilot{

    name: string;
    dorsal: string;
    nacionality: Nacionality;
    image: string;
    id:number;



}
export enum Nacionality{

    SPAIN = 'Spain',
    ITALIA = 'Italia',
    FRANCE = 'France',
    AUSTRALIA ='Australia'
}