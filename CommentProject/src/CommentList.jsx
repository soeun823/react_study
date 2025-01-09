import Comment from "./Comment";
import Newcomments from "./newComments";

const comments=Newcomments;

export default function CommentList(){
	return(
		<div>
			<Comment name = "이선생" content = "첫댓글입니다."/>
			{
				comments.map(function(comment){
					return(
					<Comment name={comment.name} content={comment.content}/>
					);
				})
			}
		</div>
	);	
}
