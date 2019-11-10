import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Sinc extends ResthopperComponent {

	public guid: string = "a2d9503d-a83c-4d71-81e0-02af8d09cd0c";
	public name: string = "Sinc";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Compute the sinc (Sinus Cardinalis) of a value.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}