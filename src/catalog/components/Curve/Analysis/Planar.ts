import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Planar extends ResthopperComponent {

	public guid: string = "5816ec9c-f170-4c59-ac44-364401ff84cd";
	public name: string = "Planar";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Test a curve for planarity.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}