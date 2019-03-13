import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postList: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(
      data => this.postList = data
    );
  }

  createPost() {
    const post = {
      id: null,
      title: 'New Post Title',
      body: 'New Post Body'
    };

    this.postService.createPost(post).subscribe({
      next: data => this.postList.unshift(data),
      error: (err) => alert('Error Occured: ' + err),
      complete: () => alert('completed')
    });

  }

}
