export interface IPilot{

    name: string;
    dorsal: string;
    nacionality: Nacionality;
    image: string;



}
export enum Nacionality{

    SPAIN = 'Spain',
    ITALIA = 'Italia',
    FRANCE = 'France',
    AUSTRALIA ='Australia'
}