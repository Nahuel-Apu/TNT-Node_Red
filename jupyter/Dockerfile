FROM jupyter/base-notebook:latest
LABEL author=<apu.n.alamo@gmail.com>

WORKDIR ./notebooks

ENV ACCEPT_INTEL_PYTHON_EULA=yes

CMD jupyter notebook

RUN pip install ipywidgets

RUN jupyter nbextension enable --py widgetsnbextension

