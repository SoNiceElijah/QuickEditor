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
                <div className="lr-controls">
                    <div className="btn-red lr-c-btn">X</div>
                    <div className="lr-c-btn">&#8593;</div>
                    <div className="lr-c-btn">&#8595;</div>
                    <div className="btn-bottom btn-blue lr-c-btn">+</div>
                </div>
                <div className="lr-input">
                    <input type="text" placeholder="Название правила" />
                </div>
                <div className="lr-tags">
                    {ctx.tags.map(t => this.tag(t))}
                    <div className="tag-new">
                        <input placeholder="Группа" type="text" />
                    </div>
                </div>
                <div className="lr-records">
                    {ctx.lessons.map((l,i) => this.lesson(l,i))}                    
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

        let sum = ctx.s + ctx.p + ctx.l;
        let ws = (ctx.s / sum) * 100;
        let wp = (ctx.p / sum) * 100;
        let wl = (ctx.l / sum) * 100;

        return (
            <div className="ls-records-item">
                <div className="rc-tag">{ctx.tag}</div>
                <div className="rc-name">{ctx.name}</div>
                <div className="rc-stat">
                    <div className="rc-progress">
                        <div className="rc-p-s" style={{ width : ws + '%' }} ></div>
                        <div className="rc-p-p" style={{ width : wp + '%' }} ></div>
                        <div className="rc-p-l" style={{ width : wl + '%' }} ></div>
                    </div>
                </div>
                <div className="rc-lec">{ctx.s}</div>
                <div className="rc-prc">{ctx.p}</div>
                <div className="rc-lab">{ctx.l}</div>               
            </div>
        )
    }

    render() {
        return (
        <div className="lesson-panel">
            <div className="padding">
                <div className="lesson-panel-desc">
                    <h1>Управление парами</h1>
                </div>
                <div className="lesson-panel-list">
                    {this.props.rules.map(r => this.rule(r))}
                    <div className="record-new">Добавить</div>
                </div>
            </div>
        </div>)
    }
}