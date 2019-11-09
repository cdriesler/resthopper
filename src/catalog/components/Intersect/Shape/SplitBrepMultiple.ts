import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SplitBrepMultiple extends ResthopperComponent {

	public guid: string = "03f22640-ff80-484e-bb53-a4025c5faa07";
	public name: string = "Split Brep Multiple";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Split one brep with a bunch of others.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}