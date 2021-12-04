import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent implements OnInit {
  Questions = [
    {
      question: 'I found myself getting upset by quite trivial things',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: 'I was aware of dryness of my mouth',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: "I couldn't seem to experience any positive feeling at all",
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question:
        'I experienced breathing difficulty (eg, excessively rapid breathing, breathlessness in the absence of physical exertion)',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: "I just couldn't seem to get going",
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: 'I tended to over-react to situations',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: 'I had a feeling of shakiness (eg, legs going to give way)',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: 'I found it difficult to relax',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question:
        'I found myself in situations that made me so anxious I was most relieved when they ended',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: 'I felt that I had nothing to look forward to',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: 'I found myself getting upset rather easily',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: 'I felt that I was using a lot of nervous energy',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: 'I felt sad and depressed',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question:
        'I found myself getting impatient when I was delayed in any way (eg, elevators, traffic lights, being kept waiting)',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: 'I had a feeling of faintness',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: 'I felt that I had lost interest in just about everything',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: "I felt I wasn't worth much as a person",
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: 'I felt that I was rather touch',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question:
        'I perspired noticeably (eg, hands sweaty) in the absence of high temperatures or physical exertion',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: 'I felt scared without any good reason',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: "I felt that life wasn't worthwhile",
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: 'I found it hard to wind down',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: 'I had difficulty in swallowing',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: "I couldn't seem to get any enjoyment out of the things I did",
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question:
        'I was aware of the action of my heart in the absence of physical exertion (eg, sense of heart rate increase, heart missing a beat)',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: 'I felt down-hearted and blue',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: 'I found that I was very irritable',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: 'I felt I was close to panic',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: 'I found it hard to calm down after something upset me',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question:
        'I feared that I would be thrown by some trivial but unfamiliar task',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: 'I was unable to become enthusiastic about anything',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question:
        'I found it difficult to tolerate interruptions to what I was doing',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: 'I was in a state of nervous tension',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: 'I felt I was pretty worthless',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question:
        'I was intolerant of anything that kept me from getting on with what I was doing',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: 'I felt terrified',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: 'I could see nothing in the future to be hopeful about',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: 'I felt that life was meaningless',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: 'I found myself getting agitated',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question:
        'I was worried about situations in which I might panic and make a fool of myself',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: 'I experienced trembling (eg, in the hands)',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
    {
      question: 'I found it difficult to work up the initiative to do things',
      answers: [
        'Did not apply to me at all',
        'Applied to me to some degree, or some of the time',
        'Applied to me to a considerable degree, or a good part of time',
        'Applied to me very much, or most of the time',
      ],
    },
  ];
  results: any[] = [];
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {}

  selectionChange(Q, A) {}

  submit() {
    this.results = [];
    var inputs, index;

    inputs = document.getElementsByTagName('input');
    for (index = 0; index < inputs.length; ++index) {
      if (inputs[index].checked) {
        this.results.push(inputs[index].value);
      }
    }
    console.log(this.results);

    console.log(
      this.results[2],
      this.results[4],
      this.results[9],
      this.results[12],
      this.results[15],
      this.results[16],
      this.results[20],
      this.results[23],
      this.results[25],
      this.results[30],
      this.results[33],
      this.results[36],
      this.results[37],
      this.results[41]
    );

    let DepressionQuestions = {
      results: [
        Number(this.results[2]),
        Number(this.results[4]),
        Number(this.results[9]),
        Number(this.results[12]),
        Number(this.results[15]),
        Number(this.results[16]),
        Number(this.results[20]),
        Number(this.results[23]),
        Number(this.results[25]),
        Number(this.results[30]),
        Number(this.results[33]),
        Number(this.results[36]),
        Number(this.results[37]),
        Number(this.results[41]),
      ],
    };

    this.api.postT(DepressionQuestions)
      .then(({data}) => {
        console.log(data);
        
        if (data.prediction_text == 'Normal') {
          this.router.navigateByUrl('normal');
        } else if (data.prediction_text == 'Mild') {
          this.router.navigateByUrl('mild');
        } else if (data.prediction_text == 'Moderate') {
          this.router.navigateByUrl('moderate');
        } else if (data.prediction_text == 'Severe') {
          this.router.navigateByUrl('severe');
        } else if (data.prediction_text == 'Extremely Severe') {
          this.router.navigateByUrl('extremely_severe');
        }
      });
  }
}
