import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class TextFragment extends ResthopperComponent {

	public guid: string = "07e0811f-034a-4504-bca0-2d03b2c46217";
	public name: string = "Text Fragment";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Extract a fragment (subset) of some text";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}