import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MakeTwoD extends ResthopperComponent {

	public guid: string = "96e40f6b-ba46-4102-bf15-ebf90471f4a0";
	public name: string = "Make2D";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Create a hidden line drawing from geometry";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}