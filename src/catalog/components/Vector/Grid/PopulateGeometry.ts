import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PopulateGeometry extends ResthopperComponent {

	public guid: string = "c8cb6a5c-2ffd-4095-ba2a-5c35015e09e4";
	public name: string = "Populate Geometry";
	public category: string = "Vector";
	public subCategory: string = "Grid";
	public description: string = "Populate generic geometry with points";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}