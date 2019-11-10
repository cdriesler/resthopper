import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Dimensions extends ResthopperComponent {

	public guid: string = "f241e42e-8983-4ed3-b869-621c07630b00";
	public name: string = "Dimensions";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Get the approximate dimensions of a surface";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}