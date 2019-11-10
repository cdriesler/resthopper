import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DivideDistance extends ResthopperComponent {

	public guid: string = "1e531c08-9c80-46d6-8850-1b50d1dae69f";
	public name: string = "Divide Distance";
	public category: string = "Curve";
	public subCategory: string = "Division";
	public description: string = "Divide a curve with a preset distance between points";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}