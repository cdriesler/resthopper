import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class MatchText extends ResthopperComponent {

	public guid: string = "3756c55f-95c3-442c-a027-6b3ab0455a94";
	public name: string = "Match Text";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Match a text against a pattern";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}