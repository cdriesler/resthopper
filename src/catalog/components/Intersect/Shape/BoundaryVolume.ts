import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class BoundaryVolume extends ResthopperComponent {

	public guid: string = "b57bf805-046a-4360-ad76-51aeddfe9720";
	public name: string = "Boundary Volume";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Create a closed polysurface from boundary surfaces";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}