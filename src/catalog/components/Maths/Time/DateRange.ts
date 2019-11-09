import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class DateRange extends ResthopperComponent {

	public guid: string = "38a4e722-ad5a-4229-a170-e27ae1345538";
	public name: string = "Date Range";
	public category: string = "Maths";
	public subCategory: string = "Time";
	public description: string = "Create a range of successive dates or times";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}