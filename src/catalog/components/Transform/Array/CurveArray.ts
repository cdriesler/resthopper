import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class CurveArray extends ResthopperComponent {

	public guid: string = "c6f23658-617f-4ac8-916d-d0d9e7241b25";
	public name: string = "Curve Array";
	public category: string = "Transform";
	public subCategory: string = "Array";
	public description: string = "Create an array of geometry along a curve.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}