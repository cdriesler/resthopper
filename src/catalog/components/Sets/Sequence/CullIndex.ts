import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CullIndex extends ResthopperComponent {

	public guid: string = "501aecbb-c191-4d13-83d6-7ee32445ac50";
	public name: string = "Cull Index";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Cull (remove) indexed elements from a list.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}