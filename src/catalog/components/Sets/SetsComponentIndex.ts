import SetsCarthesianProduct from './Sets/CarthesianProduct'
import SetsCreateSet from './Sets/CreateSet'
import SetsDeleteConsecutive from './Sets/DeleteConsecutive'
import SetsDisjoint from './Sets/Disjoint'
import SetsFindsimilarmember from './Sets/Findsimilarmember'
import SetsKeyValueSearch from './Sets/KeyValueSearch'
import SetsMemberIndex from './Sets/MemberIndex'
import SetsReplaceMembers from './Sets/ReplaceMembers'
import SetsSetDifference from './Sets/SetDifference'
import SetsSetDifferenceS from './Sets/SetDifferenceS'
import SetsSetIntersection from './Sets/SetIntersection'
import SetsSetMajority from './Sets/SetMajority'
import SetsSetUnion from './Sets/SetUnion'
import SetsSubSet from './Sets/SubSet'
import SequenceCharSequence from './Sequence/CharSequence'
import SequenceCullIndex from './Sequence/CullIndex'
import SequenceCullNth from './Sequence/CullNth'
import SequenceCullPattern from './Sequence/CullPattern'
import SequenceDuplicateData from './Sequence/DuplicateData'
import SequenceFibonacci from './Sequence/Fibonacci'
import SequenceJitter from './Sequence/Jitter'
import SequenceRandom from './Sequence/Random'
import SequenceRandomReduce from './Sequence/RandomReduce'
import SequenceRandomEx from './Sequence/RandomEx'
import SequenceRange from './Sequence/Range'
import SequenceRepeatData from './Sequence/RepeatData'
import SequenceSequence from './Sequence/Sequence'
import SequenceSeries from './Sequence/Series'
import SequenceStackData from './Sequence/StackData'
import TextCharacters from './Text/Characters'
import TextConcatenate from './Text/Concatenate'
import TextFormat from './Text/Format'
import TextMatchText from './Text/MatchText'
import TextReplaceText from './Text/ReplaceText'
import TextSortText from './Text/SortText'
import TextTextCase from './Text/TextCase'
import TextTextDistance from './Text/TextDistance'
import TextTextFragment from './Text/TextFragment'
import TextTextJoin from './Text/TextJoin'
import TextTextLength from './Text/TextLength'
import TextTextSplit from './Text/TextSplit'
import TextTextTrim from './Text/TextTrim'
import TreeCleanTree from './Tree/CleanTree'
import TreeConstructPath from './Tree/ConstructPath'
import TreeDeconstructPath from './Tree/DeconstructPath'
import TreeEntwine from './Tree/Entwine'
import TreeExplodeTree from './Tree/ExplodeTree'
import TreeFlattenTree from './Tree/FlattenTree'
import TreeFlipMatrix from './Tree/FlipMatrix'
import TreeGraftTree from './Tree/GraftTree'
import TreeMatchTree from './Tree/MatchTree'
import TreeMerge from './Tree/Merge'
import TreeMergeZeroThree from './Tree/MergeZeroThree'
import TreeMergeZeroFour from './Tree/MergeZeroFour'
import TreeMergeZeroFive from './Tree/MergeZeroFive'
import TreeMergeZeroSix from './Tree/MergeZeroSix'
import TreeMergeZeroEight from './Tree/MergeZeroEight'
import TreeMergeOneZero from './Tree/MergeOneZero'
import TreeMergeMultiple from './Tree/MergeMultiple'
import TreePathCompare from './Tree/PathCompare'
import TreePathMapper from './Tree/PathMapper'
import TreePruneTree from './Tree/PruneTree'
import TreeRelativeItem from './Tree/RelativeItem'
import TreeRelativeItems from './Tree/RelativeItems'
import TreeReplacePaths from './Tree/ReplacePaths'
import TreeShiftPaths from './Tree/ShiftPaths'
import TreeSimplifyTree from './Tree/SimplifyTree'
import TreeSplitTree from './Tree/SplitTree'
import TreeStreamFilter from './Tree/StreamFilter'
import TreeStreamGate from './Tree/StreamGate'
import TreeTreeBranch from './Tree/TreeBranch'
import TreeTreeItem from './Tree/TreeItem'
import TreeTreeStatistics from './Tree/TreeStatistics'
import TreeTrimTree from './Tree/TrimTree'
import TreeUnflattenTree from './Tree/UnflattenTree'
import ListCombineData from './List/CombineData'
import ListCrossReference from './List/CrossReference'
import ListDispatch from './List/Dispatch'
import ListInsertItems from './List/InsertItems'
import ListItemIndex from './List/ItemIndex'
import ListListItem from './List/ListItem'
import ListListLength from './List/ListLength'
import ListLongestList from './List/LongestList'
import ListNullItem from './List/NullItem'
import ListPartitionList from './List/PartitionList'
import ListPicknChoose from './List/PicknChoose'
import ListReplaceItems from './List/ReplaceItems'
import ListReplaceNulls from './List/ReplaceNulls'
import ListReverseList from './List/ReverseList'
import ListShiftList from './List/ShiftList'
import ListShortestList from './List/ShortestList'
import ListSiftPattern from './List/SiftPattern'
import ListSortList from './List/SortList'
import ListSplitList from './List/SplitList'
import ListSubList from './List/SubList'
import ListWeave from './List/Weave'

const Sets = {
	Sets: {
		CarthesianProduct: SetsCarthesianProduct,
		CreateSet: SetsCreateSet,
		DeleteConsecutive: SetsDeleteConsecutive,
		Disjoint: SetsDisjoint,
		Findsimilarmember: SetsFindsimilarmember,
		KeyValueSearch: SetsKeyValueSearch,
		MemberIndex: SetsMemberIndex,
		ReplaceMembers: SetsReplaceMembers,
		SetDifference: SetsSetDifference,
		SetDifferenceS: SetsSetDifferenceS,
		SetIntersection: SetsSetIntersection,
		SetMajority: SetsSetMajority,
		SetUnion: SetsSetUnion,
		SubSet: SetsSubSet,
	},
	Sequence: {
		CharSequence: SequenceCharSequence,
		CullIndex: SequenceCullIndex,
		CullNth: SequenceCullNth,
		CullPattern: SequenceCullPattern,
		DuplicateData: SequenceDuplicateData,
		Fibonacci: SequenceFibonacci,
		Jitter: SequenceJitter,
		Random: SequenceRandom,
		RandomReduce: SequenceRandomReduce,
		RandomEx: SequenceRandomEx,
		Range: SequenceRange,
		RepeatData: SequenceRepeatData,
		Sequence: SequenceSequence,
		Series: SequenceSeries,
		StackData: SequenceStackData,
	},
	Text: {
		Characters: TextCharacters,
		Concatenate: TextConcatenate,
		Format: TextFormat,
		MatchText: TextMatchText,
		ReplaceText: TextReplaceText,
		SortText: TextSortText,
		TextCase: TextTextCase,
		TextDistance: TextTextDistance,
		TextFragment: TextTextFragment,
		TextJoin: TextTextJoin,
		TextLength: TextTextLength,
		TextSplit: TextTextSplit,
		TextTrim: TextTextTrim,
	},
	Tree: {
		CleanTree: TreeCleanTree,
		ConstructPath: TreeConstructPath,
		DeconstructPath: TreeDeconstructPath,
		Entwine: TreeEntwine,
		ExplodeTree: TreeExplodeTree,
		FlattenTree: TreeFlattenTree,
		FlipMatrix: TreeFlipMatrix,
		GraftTree: TreeGraftTree,
		MatchTree: TreeMatchTree,
		Merge: TreeMerge,
		MergeZeroThree: TreeMergeZeroThree,
		MergeZeroFour: TreeMergeZeroFour,
		MergeZeroFive: TreeMergeZeroFive,
		MergeZeroSix: TreeMergeZeroSix,
		MergeZeroEight: TreeMergeZeroEight,
		MergeOneZero: TreeMergeOneZero,
		MergeMultiple: TreeMergeMultiple,
		PathCompare: TreePathCompare,
		PathMapper: TreePathMapper,
		PruneTree: TreePruneTree,
		RelativeItem: TreeRelativeItem,
		RelativeItems: TreeRelativeItems,
		ReplacePaths: TreeReplacePaths,
		ShiftPaths: TreeShiftPaths,
		SimplifyTree: TreeSimplifyTree,
		SplitTree: TreeSplitTree,
		StreamFilter: TreeStreamFilter,
		StreamGate: TreeStreamGate,
		TreeBranch: TreeTreeBranch,
		TreeItem: TreeTreeItem,
		TreeStatistics: TreeTreeStatistics,
		TrimTree: TreeTrimTree,
		UnflattenTree: TreeUnflattenTree,
	},
	List: {
		CombineData: ListCombineData,
		CrossReference: ListCrossReference,
		Dispatch: ListDispatch,
		InsertItems: ListInsertItems,
		ItemIndex: ListItemIndex,
		ListItem: ListListItem,
		ListLength: ListListLength,
		LongestList: ListLongestList,
		NullItem: ListNullItem,
		PartitionList: ListPartitionList,
		PicknChoose: ListPicknChoose,
		ReplaceItems: ListReplaceItems,
		ReplaceNulls: ListReplaceNulls,
		ReverseList: ListReverseList,
		ShiftList: ListShiftList,
		ShortestList: ListShortestList,
		SiftPattern: ListSiftPattern,
		SortList: ListSortList,
		SplitList: ListSplitList,
		SubList: ListSubList,
		Weave: ListWeave,
	},
}

export default Sets;