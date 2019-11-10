import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DuplicateData extends ResthopperComponent {

	public guid: string = "dd8134c0-109b-4012-92be-51d843edfff7";
	public name: string = "Duplicate Data";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Duplicate data a predefined number of times.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}