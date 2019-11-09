import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class DotDisplay extends ResthopperComponent {

	public guid: string = "6b1bd8b2-47a4-4aa6-a471-3fd91c62a486";
	public name: string = "Dot Display";
	public category: string = "Display";
	public subCategory: string = "Preview";
	public description: string = "Draw a collection of coloured dots";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}