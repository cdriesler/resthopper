import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class MetaBallt extends ResthopperComponent {

	public guid: string = "c48cf4d4-432c-41b6-b77a-77650479a31f";
	public name: string = "MetaBall(t)";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "2D Metaball isosurface by threshold";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}