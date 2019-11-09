import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class NullItem extends ResthopperComponent {

	public guid: string = "c74efd0e-7fe3-4c2d-8c9d-295c5672fb13";
	public name: string = "Null Item";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Test a data item for null or invalidity";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}