import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ToPolar extends ResthopperComponent {

	public guid: string = "61647ba2-31eb-4921-9632-df81e3286f7d";
	public name: string = "To Polar";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Convert a 3D point to plane polar coordinates.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}