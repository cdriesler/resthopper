import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ProjectPoint extends ResthopperComponent {

	public guid: string = "5184b8cb-b71e-4def-a590-cd2c9bc58906";
	public name: string = "Project Point";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Project a point onto a collection of shapes";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

}