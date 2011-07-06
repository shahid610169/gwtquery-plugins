package gwtquery.plugins.enhance.client;

import static com.google.gwt.query.client.GQuery.$;
import static gwtquery.plugins.enhance.client.Enhance.Enhance;
import gwtquery.plugins.enhance.client.colorpicker.ColorPickerFactory.ColorPickerType;
import gwtquery.plugins.enhance.client.slider.SliderBar;
import gwtquery.plugins.enhance.client.slider.SliderBar.LabelFormatter;

import java.util.Arrays;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.Element;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.event.logical.shared.ValueChangeHandler;
import com.google.gwt.query.client.Function;
import com.google.gwt.query.client.plugins.widgets.WidgetInitializer;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TextBox;
/**
 * Example code for the GwtQuery Enhance plugin.
 */
public class EnhanceSample implements EntryPoint {
  
  public void onModuleLoad() {
    
    TextBox t = new TextBox();
    t.addValueChangeHandler(new ValueChangeHandler<String>() {
      public void onValueChange(ValueChangeEvent<String> event) {
        GWT.log("event.getValue():" + event.getValue());
        GWT.log("event.getSource():" + event.getSource());
      }
    });
    SliderBar slider = new SliderBar(0, 10);
    slider.setStepSize(1);
    ValueChangeHandler<Double> v = new ValueChangeHandler<Double>() {
      public void onValueChange(ValueChangeEvent<Double> event) {
        System.out.println("Change");
        GWT.log("event.getValue():" + event.getValue());
        GWT.log("event.getSource():" + event.getSource());
      }
    };
    slider.addValueChangeHandler(v);

    RootPanel.get().add(t);
    RootPanel.get().add(slider);
    if (true) return;
    $("#enhance").click(new Function(){
      public void f(Element e) {
        $(".editable").as(Enhance).richText();
        $(".color").as(Enhance).colorBox();
        $(".colorfull").as(Enhance).colorBox(ColorPickerType.ADVANCED);
        $(".ffamily").as(Enhance).fontFamilyBox();
        $(".fsize").as(Enhance).fontSizeBox();
        $(".slider").as(Enhance).slider(0, 31, 100, new WidgetInitializer<SliderBar>() {
          public void initialize(SliderBar w, Element e) {
            w.setNumLabels(4);
            w.setNumTicks(4);
            w.setLabelFormatter(new LabelFormatter() {
              public String formatLabel(SliderBar slider, double value) {
                return value == 0 ? "" : (int)value + " days";
              }
            });
            w.addValueChangeHandler(new ValueChangeHandler<Double>() {
              public void onValueChange(ValueChangeEvent<Double> event) {
                System.out.println("Changed -> " + event.getValue());
              }
            });
          }
        });
        $(".multiselect").as(Enhance).multiselect();
        $(e).hide();
      }
    });
    
    $("#values").click(new Function() {
      String txt = "";
      public void f() {
        txt = "";
        $("*[name]").each(new Function(){
          public void f(Element e) {
            String v[] = $(e).as(Enhance).vals();
            if (v.length > 0 && !v[0].isEmpty()) {
              txt += e.getTagName() + " name=" + $(e).attr("name") + " value=" + Arrays.asList(v) + "\n";
            }
          }
        });
        Window.alert(txt);
      }
    });
  }
}
