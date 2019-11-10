import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MetaBalltCustom extends ResthopperComponent {

	public guid: string = "c4373505-a4cf-4992-8db1-fd6e6bb5850d";
	public name: string = "MetaBall(t) Custom";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "2D Metaball isosurface by threshold and custom charge values";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}