import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class MetaBall extends ResthopperComponent {

	public guid: string = "dc934310-67eb-4d1d-8607-7cc62a501dd9";
	public name: string = "MetaBall";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "2D Metaball isocurve through point";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}