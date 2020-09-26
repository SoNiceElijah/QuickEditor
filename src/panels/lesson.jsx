import React from 'react';

export class LessonPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.rule = this.rule.bind(this);
        this.tag = this.tag.bind(this);
        this.lesson = this.lesson.bind(this);
    }

    rule(ctx) {
        return (
            <div className="lesson-rule">
                <div className="lr-input">
                    <input type="text" placeholder="Название правила" />
                </div>
                <div className="lr-tags">
                    {ctx.tags.map(t => this.tag(t))}
                    <div className="tag-new">+</div>
                </div>
                <div className="lr-records">
                    {ctx.lessons.map((l,i) => this.lesson(l,i))}
                    <div className="record-new">+ Добавить</div>
                </div>
            </div>
        );
    }

    tag(ctx, idx) {
        return (
            <div className="ls-tags-item">{ctx}</div>
        )
    }

    lesson(ctx,idx) {
        return (
            <div className="ls-records-item">
                <div className="rc-lec">0</div>
                <div className="rc-prc">0</div>
                <div className="rc-lab">10</div>
                <div className="rc-name">{ctx.name}</div>
            </div>
        )
    }

    render() {
        return (
        <div className="lesson-panel">
            <div className="padding">
                <div className="lesson-panel-desc">
                    <h1>Управление парами</h1>
                    <p> Здесь можно отредактировать пары для групп </p>
                </div>
                <div className="lesson=panel-list">
                    {this.props.rules.map(r => this.rule(r))}
                </div>
            </div>
        </div>)
    }
}