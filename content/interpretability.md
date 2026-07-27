---
title: "Anthropic 可解释性研究导读"
description: "从字典学习到归因图：精选 Anthropic interpretability 团队的代表性研究，配图与原文链接。"
hidemeta: true
ShowToc: false
---

<p class="interp-intro">大语言模型常被称作"黑箱"——它能给出答案，却说不清自己是怎么想的。Anthropic 的可解释性（interpretability）团队一直在做一件事：打开这只箱子。下面按时间顺序选了五项代表性工作，配上一分钟读懂的导读；想深入的话，点每条里的原文链接。</p>

<div class="interp-list">

<article class="interp-entry interp-entry-plain">
    <div class="interp-thumb interp-thumb-glyph">SAE</div>
    <div class="interp-meta">
        <span class="interp-date">2023 · 10</span>
        <h2><a href="https://transformer-circuits.pub/2023/monosemantic-features/index.html" target="_blank" rel="noopener">Towards Monosemanticity</a></h2>
        <p>单个神经元往往同时"身兼数职"，直接看它没有意义。这篇工作用稀疏自编码器（SAE）做"字典学习"，把纠缠在一起的激活拆成一个个含义单一、人类可读的特征——之后所有工作的方法基石。</p>
        <div class="interp-links">
            <a href="https://transformer-circuits.pub/2023/monosemantic-features/index.html" target="_blank" rel="noopener">论文 ↗</a>
        </div>
    </div>
</article>

<article class="interp-entry">
    <a class="interp-thumb" href="https://www.anthropic.com/news/mapping-mind-language-model" target="_blank" rel="noopener">
        <img src="/interpretability/golden-gate-feature.png" alt="金门大桥特征在多种语言文本上的激活可视化" loading="lazy">
    </a>
    <div class="interp-meta">
        <span class="interp-date">2024 · 05</span>
        <h2><a href="https://www.anthropic.com/news/mapping-mind-language-model" target="_blank" rel="noopener">Mapping the Mind of a Large Language Model</a></h2>
        <p>第一次在生产级模型（Claude 3 Sonnet）内部提取出数百万个可解释特征：金门大桥、代码 bug、内心冲突……抽象概念在模型中的"位置"第一次被画成了地图，而且同一个特征能跨语言、跨图文激活。</p>
        <div class="interp-links">
            <a href="https://www.anthropic.com/news/mapping-mind-language-model" target="_blank" rel="noopener">官方文章 ↗</a>
            <a href="https://transformer-circuits.pub/2024/scaling-monosemanticity/" target="_blank" rel="noopener">论文 ↗</a>
        </div>
    </div>
</article>

<article class="interp-entry">
    <a class="interp-thumb" href="https://www.anthropic.com/news/golden-gate-claude" target="_blank" rel="noopener">
        <img src="/interpretability/golden-gate-claude.jpg" alt="Golden Gate Claude 文章头图：三联色调的金门大桥" loading="lazy">
    </a>
    <div class="interp-meta">
        <span class="interp-date">2024 · 05</span>
        <h2><a href="https://www.anthropic.com/news/golden-gate-claude" target="_blank" rel="noopener">Golden Gate Claude</a></h2>
        <p>找到特征只是"能读"，这次是"能写"：把"金门大桥"特征人为放大后，Claude 无论聊什么都会绕回那座桥——用一场公开演示证明，特征不仅可以观察，还能因果地操控模型行为。</p>
        <div class="interp-links">
            <a href="https://www.anthropic.com/news/golden-gate-claude" target="_blank" rel="noopener">官方文章 ↗</a>
        </div>
    </div>
</article>

<article class="interp-entry">
    <a class="interp-thumb" href="https://www.anthropic.com/news/tracing-thoughts-language-model" target="_blank" rel="noopener">
        <img src="/interpretability/tracing-thoughts.png" alt="同一提示词在英文、中文、法文下共享多语言特征的归因图" loading="lazy">
    </a>
    <div class="interp-meta">
        <span class="interp-date">2025 · 03</span>
        <h2><a href="https://www.anthropic.com/news/tracing-thoughts-language-model" target="_blank" rel="noopener">Tracing the Thoughts of a Large Language Model</a></h2>
        <p>用"归因图"追踪一条回答内部的完整因果链：写押韵诗时 Claude 会提前想好韵脚再倒推整句，不同语言共享同一片"概念空间"，心算用的路径和它口头解释的方法也并不相同。</p>
        <div class="interp-links">
            <a href="https://www.anthropic.com/news/tracing-thoughts-language-model" target="_blank" rel="noopener">官方文章 ↗</a>
            <a href="https://transformer-circuits.pub/2025/attribution-graphs/biology.html" target="_blank" rel="noopener">论文 ↗</a>
        </div>
    </div>
</article>

<article class="interp-entry">
    <a class="interp-thumb" href="https://www.anthropic.com/research/introspection" target="_blank" rel="noopener">
        <img src="/interpretability/introspection.png" alt="各代 Claude 模型内省检测能力的对比图表" loading="lazy">
    </a>
    <div class="interp-meta">
        <span class="interp-date">2025 · 10</span>
        <h2><a href="https://www.anthropic.com/research/introspection" target="_blank" rel="noopener">Signs of Introspection in Large Language Models</a></h2>
        <p>模型能觉察自己的内部状态吗？研究者把某个概念的激活"注入"模型内部，再问它有没有察觉。Claude 在部分实验中表现出有限但真实的内省迹象——离可靠还很远，但方向耐人寻味。</p>
        <div class="interp-links">
            <a href="https://www.anthropic.com/research/introspection" target="_blank" rel="noopener">官方文章 ↗</a>
        </div>
    </div>
</article>

</div>

<p class="interp-note">页面中的图片与原文版权归 <a href="https://www.anthropic.com" target="_blank" rel="noopener">Anthropic</a> 所有，此处仅作学习导读；导读文字为本站原创概括，细节以原文为准。</p>
