import { defineComponent, ref } from "vue";
import "../../../src/assets/style/time-line.less";
import * as jf from "js-funcs";
import { Bezier } from "bezier-js";
import * as d3 from "d3-selection";

// 编辑器页面
export default defineComponent({
  name: "tab",
  mounted() {
    type D3Dom = d3.Selection<any, unknown, null, undefined>;
    type Options = {
      parent: HTMLElement;
      size: {
        width: number;
        height: number;
      };
      line: {
        max: number;
        min: number;
        length: number;
      };
    };
    class Draw {
      options: Options;
      path: D3Dom;
      svg: D3Dom;
      points: { inner: D3Dom; out: D3Dom }[] = [];
      bezier: Bezier;
      animaPath: D3Dom;
      anima: any;
      awaitShowPoints: Array<{
        progress: number;
        inner: D3Dom;
        out: D3Dom;
      }> = [];

      constructor(map: Options) {
        this.options = map;
        const { parent, size } = map;
        const { width, height } = size;
        const svg = d3
          .select(parent)
          .append("svg")
          .style("position", `absolute`)
          .style("left", `50%`)
          .style("transform", `translateX(-50%)`)
          .style("bottom", `0`)
          .style("width", `${width}px`)
          .style("height", `${height}px`);
        this.svg = svg;
        const path = svg.append("path");
        path
          .style("stroke", "rgb(136,140,149)")
          .style("fill", "none")
          .style("stroke-width", "4px");

        this.path = path;

        // width: 974,
        // height: 138,

        this.bezier = this.getBezier([
          {
            x: 0,
            y: height,
          },
          {
            x: width / 2,
            y: -height * 0.9,
          },
          {
            x: width,
            y: height,
          },
        ]);

        path.attr("d", this.bezier.toSVG());

        console.log(this.bezier.toSVG(), "svg");

        console.log(this.bezier, path, "infoffofofof");

        this.initLine();

        this.animaPath = svg
          .append("path")
          .style("stroke", "#ffffff")
          .style("fill", "none")
          .style("stroke-width", "4px");

        const { anima, points } = this.init();

        this.anima = anima;
        this.points = points;
      }

      private getBezier(point: { x: number; y: number }[]) {
        return new Bezier(point);
      }

      init(point: number[] = [0.3, 0.5, 0.7]) {
        this.reset();
        this.awaitShowPoints = [];
        const progress = point[point.length - 1];
        const points = point.map((t) => {
          const { x, y } = this.bezier.get(t);
          const out = this.svg
            .append("circle")
            .style("display", "none")
            .style("fill", "block")
            .style("stroke", "#ffffff")
            .style("stroke-width", "2px")
            .attr("r", "5")
            .style("cx", x)
            .style("cy", y);
          const inner = this.svg
            .append("circle")
            .style("display", "none")
            .style("fill", "white")
            .attr("r", "2")
            .style("cx", x)
            .style("cy", y);
          this.awaitShowPoints.push({
            progress: t,
            inner,
            out,
          });
          return {
            inner,
            out,
          };
        });

        const anima = this.initAnima(progress);
        if (!anima) throw TypeError("入参出错");
        this.anima = anima;
        return {
          anima,
          points,
        };
      }
      private initLine() {
        const { length: lineLength, max, min } = this.options.line;
        new Array(lineLength).fill("").map((_, index) => {
          const { x, y } = this.bezier.get(
            (index + 1) * 0.01 * (100 / lineLength)
          );
          const n = this.bezier.normal((index + 1) * 0.01 * (100 / lineLength));
          const length = index % 10 === 9 ? max : min;
          this.svg
            .append("line")
            .style("fill", "block")
            .style("stroke", "rgb(136,140,149)")
            .style("stroke-width", "2px")
            .attr("x1", x)
            .attr("y1", y)
            .attr("x2", x + length * n.x)
            .attr("y2", y + length * n.y);
        });
      }
      private initAnima(progress: number) {
        if (progress === 0) return;
        const ins = jf.utils.anima(
          {
            progress: 0,
          },
          {
            progress,
          },
          1,
          (data: any) => {
            this._anima(data);
          }
        );

        return ins;
      }
      private _anima(target: { progress: number }) {
        const { progress } = target;
        const index = this.awaitShowPoints.findIndex(
          (map) => progress >= map.progress
        );
        if (index !== -1) {
          const map = this.awaitShowPoints.splice(index, 1)[0];
          if (map) {
            const { inner, out } = map;
            inner.style("display", "block");
            out.style("display", "block");
          }
        }

        this.animaPath.attr("d", this.bezier.split(progress).left.toSVG());
      }
      pause() {
        this.anima.pause();
      }
      reset() {
        this.points.map((d) => {
          d.out.remove();
          d.inner.remove();
        });
        this.points = [];
        const { height } = this.options.size;
        this.animaPath?.attr("d", `M 0 ${height} Q 0 ${height} 0 ${height}`);
      }
    }
    const d = new Draw({
      parent: document.querySelector(".time-line") as HTMLElement,
      size: {
        width: 974,
        height: 138,
      },
      line: {
        max: 20,
        min: 10,
        length: 50,
      },
    });
    setTimeout(() => {
      d.reset();
      setTimeout(() => {
        d.init([0.1, 0.2, 0.5, 0.7, 0.9]);
      }, 1000);
    }, 1000);
  },
  setup: () => () => coms(),
});

const coms = () => <div class="time-line"></div>;
