import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class PointCylindrical extends ResthopperComponent {

	public guid: string = "23603075-be64-4d86-9294-c3c125a12104";
	public name: string = "Point Cylindrical";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Create a point from cylindrical {angle,radius,elevation} coordinates.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}